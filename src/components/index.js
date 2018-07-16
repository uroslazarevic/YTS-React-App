// Home Page
import App from 'components/app';
import YTSDescription from 'components/yts_description';
import PopularDownloads from 'components/popular_downloads';
import LatestTorrents from 'components/latest_torrents';
import RenderMovieCard from 'components/render_movie_card';

// Movie Details Page
import MainMovieDetails from 'components/main_movie_info';
import SimilarMovies from 'components/similar_movies';
import Screenshots from 'components/screenshots';
import MovieSubinfo from 'components/movie_subinfo';
import MovieTrailerModal from 'components/movie_trailer_modal';
import TorrentsModal from 'components/torrents_modal';
import ImageSwiper from '../components/image_swiper';

// Browse Movies Page

//  Shared
import NavBar from 'components/navbar';
import Footer from 'components/footer';
import SearchedMovies from 'components/searched_movies';
import validate from 'components/validate_form';
import renderField from 'components/renderField';
import LoginForm from 'components/login_form';
import RegisterForm from 'components/register_form';
// Loaders
import { PageLoader, SearchLoader } from 'components/loader';

export { 
  App,
  YTSDescription,
  PopularDownloads,
  LatestTorrents,
  RenderMovieCard,
  MainMovieDetails,
  SimilarMovies,
  Screenshots,
  MovieSubinfo,
  MovieTrailerModal,
  TorrentsModal,
  NavBar,
  Footer,
  SearchedMovies,
  PageLoader,
  SearchLoader,
  validate,
  renderField,
  LoginForm,
  RegisterForm,
  ImageSwiper
}