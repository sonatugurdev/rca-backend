import React from "react";
import { ReviewExample } from "../svgs/ReviewExample";

export function Reviews(props) {
  return (
    <div className="App-section4">
      <p className="section4-title">Reviews</p>
      <div className="review">
        <ReviewExample />
      </div>
      <div className="review">
        <ReviewExample />
      </div>
      <div className="review">
        <ReviewExample />
      </div>
    </div>
  );
}
