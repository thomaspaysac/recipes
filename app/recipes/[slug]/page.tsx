import Image from "next/image";
import { serif } from "@/app/lib/fonts";
import { recipesList } from "@/app/lib/recipes";
import { formatTotalTime } from "@/app/lib/functions";

export default function RecipePage ({params} : {params: {slug: string}}) {
  const recipe = recipesList.find((el) => el.slug === params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col bg-white rounded-xl w-fit p-8">
        <Image src={`/recipes/${recipe?.slug}.png`} height={200} width={600} alt="" className="rounded-xl self-center" />
        <div className={`font-bold text-3xl my-4 tracking-wide ${serif.className}`}>
          {recipe?.name}
        </div>
        <div className="bg-rose-50 p-4 rounded my-4 leading-relaxed">
          <h3 className="font-semibold text-red-900">Temps de préparation</h3>
          <ul className="list-disc list-inside text-sm">
            <li><span className="font-semibold">Total :</span> {formatTotalTime(recipe?.temps.preparation, recipe?.temps.cuisson)}</li>
            <li><span className="font-semibold">Préparation :</span> {recipe?.temps.preparation} minutes</li>
            <li><span className="font-semibold">Cuisson :</span> {recipe?.temps.cuisson} minutes</li>
          </ul>
        </div>
        <div className="my-4">
          <h2 className={`font-bold text-2xl mb-2 text-red-900 ${serif.className}`}>Ingrédients</h2>
          <ul className="list-disc list-inside text-sm leading-loose">
            {recipe?.ingredients.map((el, i) => {
              return (
                <li key={i}>{el}</li>
              )
            })}
          </ul>
        </div>
        <div className="separator"></div>
        <div className="my-4">
          <h2 className={`font-bold text-2xl mb-2 text-red-900 ${serif.className}`}>Préparation</h2>
          <ol className="list-decimal list-inside text-sm leading-loose">
            {recipe?.steps.map((el, i) => {
              return (
                <li key={i}>{el}</li>
              )
            })
            }
          </ol>
        </div>
      </div>
    </main>
  )
}