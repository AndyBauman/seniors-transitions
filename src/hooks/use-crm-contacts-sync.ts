"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getContacts,
  updateContact as localUpdateContact,
  type Contact,
  type PipelineStage,
} from "@/lib/crm-store";
import {
  fetchContacts,
  isApiAvailable,
  apiSeedContacts,
  apiUpdateContact,
} from "@/lib/crm-api";

/**
 * Same source as All Contacts: Supabase when API is up, else localStorage.
 */
export function useCrmContactsSync() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [useApi, setUseApi] = useState(false);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(async () => {
    if (!useApi) {
      setContacts(getContacts());
      return;
    }
    try {
      setContacts(await fetchContacts());
    } catch {
      /* keep current */
    }
  }, [useApi]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const apiOk = await isApiAvailable();
      if (cancelled) return;
      setUseApi(apiOk);
      if (apiOk) {
        await apiSeedContacts().catch(() => {});
        try {
          const all = await fetchContacts();
          if (!cancelled) setContacts(all);
        } catch {
          if (!cancelled) {
            setUseApi(false);
            setContacts(getContacts());
          }
        }
      } else if (!cancelled) {
        setContacts(getContacts());
      }
      if (!cancelled) setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!useApi || !ready) return;
    const bump = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    document.addEventListener("visibilitychange", bump);
    window.addEventListener("focus", bump);
    return () => {
      document.removeEventListener("visibilitychange", bump);
      window.removeEventListener("focus", bump);
    };
  }, [useApi, ready, refresh]);

  const persistStage = useCallback(
    async (id: string, stage: PipelineStage) => {
      if (useApi) await apiUpdateContact(id, { stage });
      else localUpdateContact(id, { stage });
      await refresh();
    },
    [useApi, refresh]
  );

  return { contacts, useApi, ready, refresh, persistStage };
}
