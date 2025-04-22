import { supabase } from "@/utils/fetch";

export default async function Home() {
  const { data: cache_test } = await supabase.from("cache_test").select();

  console.log("cache_test", cache_test);

  return <div>{JSON.stringify(cache_test)}</div>;
}
