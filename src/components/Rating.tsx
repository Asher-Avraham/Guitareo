import { useCallback, useEffect, useState } from "react";

type ratingProps = {
  edit: boolean;
  selectedRating?: number;
  onChange?: (rating: number) => void;
};

export default function Rating({
  edit = false,
  selectedRating = 0,
  onChange = () => {
    return null;
  },
}: ratingProps) {
  const [rating, setRating] = useState<number>(selectedRating);

  console.log("selected rating", selectedRating);
  console.log("rating", rating);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (edit) {
        setRating(parseFloat(e.target.value));
      }
    },
    [edit]
  );
  useEffect(() => {
    onChange(rating);
  }, [rating]);

  return (
    <div className={`rating ${!edit ? "rating-sm" : "rating-lg"} rating-half`}>
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-1 ${
          !edit && "cursor-default"
        }`}
        value={0.5}
        onChange={handleChange}
        checked={rating === 0.5}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-2 ${
          !edit && "cursor-default"
        }`}
        value={1}
        onChange={handleChange}
        checked={rating === 1}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-1 ${
          !edit && "cursor-default"
        }`}
        value={1.5}
        onChange={handleChange}
        checked={rating === 1.5}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-2 ${
          !edit && "cursor-default"
        }`}
        value={2}
        onChange={handleChange}
        checked={rating === 2}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-1 ${
          !edit && "cursor-default"
        }`}
        value={2.5}
        onChange={handleChange}
        checked={rating === 2.5}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-2 ${
          !edit && "cursor-default"
        }`}
        value={3}
        onChange={handleChange}
        checked={rating === 3}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-1 ${
          !edit && "cursor-default"
        }`}
        value={3.5}
        onChange={handleChange}
        checked={rating === 3.5}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-2 ${
          !edit && "cursor-default"
        }`}
        value={4}
        onChange={handleChange}
        checked={rating === 4}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-1 ${
          !edit && "cursor-default"
        }`}
        value={4.5}
        onChange={handleChange}
        checked={rating === 4.5}
        disabled={!edit}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-[#aa1f23] mask mask-star-2 mask-half-2 ${
          !edit && "cursor-default"
        }`}
        value={5}
        onChange={handleChange}
        checked={rating === 5}
        disabled={!edit}
      />
    </div>
  );
}
