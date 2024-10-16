import { fetcher } from "@/utils/utils"
import useSWR from "swr"

export default function useLetter({ id }: { id: string }) {
  const { data, error, isLoading } = useSWR(`/api/letters/${id}`, fetcher)

  return {
    letter: data?.letter,
    isLoading,
    isError: error,
  }
}
