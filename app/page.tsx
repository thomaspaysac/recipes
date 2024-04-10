import Link from "next/link";
import { recipesList } from "./lib/recipes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HomePage
      <div>
        <ul>
        {
          recipesList.map((el) => {
            return (
              <li key={el.id}>
                <Link href={`/recipes/${el.slug}`}>
                  {el.name} 
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    </main>
  );
}
