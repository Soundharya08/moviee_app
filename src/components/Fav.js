import React, { useState } from 'react';

const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited((prevIsFavorited) => !prevIsFavorited);
  };

  return (
    <div>
      <button onClick={toggleFavorite}>
        {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {isFavorited && <p>Added to Favorites!</p>}
    </div>
  );
};

export default FavoriteButton;