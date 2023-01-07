import React, { useState, useMemo } from "react";
import { Player } from "@livepeer/react";
import { parseArweaveTxId, parseCid } from "livepeer/media";

export const MeetYourFarmer = () => {
  const [url, setUrl] = useState("");

  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);
  return (
    <div className="flex py-20">
      <div className="w-1/2">
        {
          <Player
            title="Meet Your Farmer"
            src="https://bafybeighlxpco7ygdqb37owivq5y7cgbgxd57pwf56pqfszxhdjtbwod5e.ipfs.w3s.link//farmerVid.mp4"
            autoPlay
            muted
            autoUrlUpload={{ fallback: true, ipfsGateway: "https://w3s.link" }}
          />
        }
      </div>
      <div className="w-1/2 pl-4">
        <h2 className="mb-2 text-2xl font-bold">The Farmer </h2>
        <h3 className="mb-2 text-lg font-bold">Wheat Farming</h3>
        <p className="mb-2 py-2 text-gray-700">
          The Indian farmer is a living idol of India, as they are the most
          hardworking farmers around the world & always busy, working hard for
          their crops, during day and night. India is called the land of
          farmers, as most of the people of the country are directly or
          indirectly involved in the agriculture sector. It would not be wrong
          to say that Indian farmers are the backbone of the economy and the
          farmers are indeed the beloved children of Mother India. Farming is
          the process of growing a wide variety of crops; India has a diverse
          culture, with approximately 22 major languages and 720 homeland
          languages spoken in India. People from all the religions like Hindu,
          Christian, Islam and Sikh live in India & they are engaged in various
          occupations, but agriculture is the main occupation.
        </p>
      </div>
    </div>
  );
};
