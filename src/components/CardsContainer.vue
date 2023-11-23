<template>
  <div class="card-container">
    <div class="card" v-for="card in cardContent" :key="card.id">
      <img :src="card.image" alt="Image" class="card-img">
      <div class="card-content">
        <p class="card-description">{{ card.text }}</p>
        <button class="read-more-btn">READ MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
import CardImage from '../assets/tile-image.png'
export default {
  data: () => ({
    CardImage,
    cardContent: [
      {
        image: CardImage,
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uliamco laboris nisi ut aliquip ex ea commodo consequat'
      },
      {
        image: CardImage,
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      },
      {
        image: CardImage,
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uliamco'
      }
    ]
  })
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next row */
  justify-content: center;
  width: 80%;
  margin: 2rem auto 0;
}

.card {
  width: calc(32.33% - 20px); /* Adjust the card width here */
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  display: flex;
  flex-direction: column; /* To make card content stack vertically */
}

.card-img {
  max-width: 90%; /* Adjust the max-width as needed */
  margin: 0 auto;
  padding-top: 15px;
  height: auto;
  object-fit: fill;
  display: block;
}

.card-content {
  padding:10px 15px 15px;
  flex: 1; /* Allow card content to expand */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push items to top and bottom */
}

.card-description {
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.read-more-btn {
  display: flexbox;
  align-items: center;
  padding: 8px 15px;
  background-color: white;
  color: #000;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 auto; /* Center button horizontally */
}

/* Media query for mobile devices */
@media screen and (max-width: 600px) {
  .card-container {
    display: flex;
    flex-wrap: wrap; /* Allow cards to wrap to the next row */
    justify-content: center;
    width: 90%;
    margin: 2rem auto;
  }
  .card {
    margin-bottom: 2rem;
    width: calc(100% - 20px); /* Display one card per row on mobile */
  }
}
@media screen and (min-width: 601px) and (max-width: 800px) {
  .card-container {
    display: flex;
    flex-wrap: wrap; /* Allow cards to wrap to the next row */
    justify-content: center;
    width: 90%;
    margin: 2rem auto 0;
  }
  .card {
    width: 90%; /* Display one card per row on mobile */
  }
}
</style>
