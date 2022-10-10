export const sadness = () => {
  console.log()
}

// import { parse } from "node-html-parser";

// export async function getDraftPick() {
//     const draftPickResponse = await fetch(
//         `https://www.tankathon.com/nfl`, {
//             mode: 'cors',
//         }
//     );
//     console.log(draftPickResponse)
//     const text = await draftPickResponse.text();
//     console.log(text)
//     const html = parse(text);
//     const picksList = html.querySelectorAll('.pick-row')!
//     console.log(picksList)
//     const denverPick = picksList.filter((pick)=> {
//         pick.querySelector('.desktop')?.text === 'Denver'
//     })

//     const denverPickNumber = denverPick[0].querySelector('.pick')!.text
//     return denverPickNumber;
// }

// Cors makes it unscrapeable :(((((
