import { useEffect, useState } from 'react';

export interface UseJsonDataResult<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

/**
 * 从 public/data 下的 JSON 文件加载数据。
 * 这些文件由 Decap CMS 后台维护，编辑保存后会触发重新部署。
 */
export function useJsonData<T>(url: string): UseJsonDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json: T) => {
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}
