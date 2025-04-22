import { supabase } from "@/utils/fetch";

export const revalidate = 30


export default async function Home() {
  const { data: cache_test } = await supabase.from("cache_test").select();

  console.log("cache_test", cache_test);

  return <div>
    {
      cache_test?.map(item => {
        return <div key={item.id} className="flex gap-4">
          <p>{item.id}</p>
          <p>{item.name}</p>
        </div>
      })
    }
  </div>;
}
