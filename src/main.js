import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  await clearGallery();
  showLoader();

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    await renderImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Oops! Something went wrong. Please try again later.',
      position: 'topRight',
    });
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
  }
});
