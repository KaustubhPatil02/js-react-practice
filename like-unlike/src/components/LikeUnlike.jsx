import React from 'react';
import { HeartIcon, SpinnerIcon } from "../utils/Icons";
import { useState } from "react";

const LikeUnlike = () => {
    const [like, setLike] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [err, setErr] = useState(null);

    const handleLike = async () => {
        setFetching(true);
        setErr(null);

        try {
            const response = await fetch("https://questions.greatfrontend.com/api/questions/like-button", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action: like ? "unlike" : "like",
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to update like status");
            }

            // Only update the like state if the API call is successful
            setLike(!like);
        } catch (err) {
            setErr(err.message);
        } finally {
            setFetching(false);
        }
    };

    return (
        <div>
          <button 
            className={`likebtn ${like ? "Liked" : ""}`} 
            onClick={handleLike} 
            disabled={fetching}
          >
            {fetching ? <SpinnerIcon /> : <><HeartIcon /> {like ? "Liked" : "Like"}</>}
          </button>
          {err && <p style={{ color: "red" }}>{err}</p>}
        </div>
      );
};

export default LikeUnlike;