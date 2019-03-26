import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers
} from "./lib/scraper";

async function go() {
  const iPromise = getHTML("https://instagram.com/therealalexnielsen");
  const tPromise = getHTML("https://twitter.com/bigalshouse");
  const [instagramHTML, twitterHTML] = await Promise.all([iPromise, tPromise]);
  const instagramCount = await getInstagramFollowers(instagramHTML);
  const twCount = await getTwitterFollowers(twitterHTML);
  console.log(
    `you have ${twCount} twitter followers and ${instagramCount} Instagram followers`
  );
}
go();
