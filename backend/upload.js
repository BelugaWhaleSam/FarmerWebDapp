import { getFilesFromPath, Web3Storage } from "web3.storage";
import fs from "fs";
// import dotenv from 'dotenv'
// dotenv.config()

/* ******************************************************************************** Token and Client ***************************************************************************************** */
const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYxZUMxQTlhMDc5NDNlQjBjMTcwQWZhMjcxNTY4MTg4NDA5YzAyRWIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzA5NDQ2OTA5MjUsIm5hbWUiOiJiZWx1Z2EifQ.A2JdUCF0vKXJXGlaTKJ1pBNIDLT2MWa4m8OGHpCWfIA"

/* Construct client with token and endpoint */
const client = new Web3Storage({ token: apiToken });

/* ****************************************************************************** Video + JSON Files***************************************************************************************** */

/* metadata for json */
const metadata = {
  name: "Video Title",
  title: "Video Title",
  description: "Video Description goes here",
};

/* metadata from forms when connected */

// const metadata = {
//   name: e.target[1].value,
//   title: e.target[2].value,
//   description: e.target[3].value,
// };

/* video from forms when connected */

// const videoName = e.target[0].value;

/* conversion to json file using fs*/
fs.writeFileSync("metadata.json", JSON.stringify(metadata));

/* video file */
const main = await getFilesFromPath(["./metadata.json", "./farmerVid.mp4"]);
// console.log(main);

/* Name of file */
const jsonName = main[0].name;
const videoName = main[1].name;

/* ********************************************************************************* URLS Functions to be called ***************************************************************************************** */
function parentURL(CID) {
  return `https://${CID}.ipfs.w3s.link`;
}
function videoURL(CID, videoName) {
  return `https://${CID}.ipfs.w3s.link/${videoName}`;
}
function jsonURL(CID, jsonName) {
  return `https://${CID}.ipfs.w3s.link/${jsonName}`;
}

/* ********************************************************************************* Upload to Web3 Storage ********************************************************************************* */

/* get CID from web3.storage */
const CID = await client.put(main);
console.log("CID: ", CID);

/* ********************************************************************************* Generate and console URLS ***************************************************************************** */

/* get Parent URL from CID */
const parent = parentURL(CID);
console.log("Parent URL: ", parent);

/* get Video URL from CID */
const video = videoURL(CID, videoName);
console.log("Video URL: ", video);

/* get JSON URL from CID */
const json = jsonURL(CID, jsonName);
console.log("JSON URL: ", json);

/* ********************************************************************************* Example URLS ***************************************************************************************** */

/* Parent = https://bafybeiawasptqk573vadniugym2c5akgpwexwcfubct6biy6qfseei7iiu.ipfs.w3s.link/ */
/* Video  = https://bafybeiawasptqk573vadniugym2c5akgpwexwcfubct6biy6qfseei7iiu.ipfs.w3s.link//video.mp4 */
/* json   = https://bafybeiawasptqk573vadniugym2c5akgpwexwcfubct6biy6qfseei7iiu.ipfs.w3s.link//metadata.json */
