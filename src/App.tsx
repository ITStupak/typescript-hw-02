import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { getPhotos } from "./apiService/gallery";
import toast, { Toaster } from "react-hot-toast";
import { FC, useState, useEffect } from "react";
import { Images, Photo } from "./types";

const App:FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Images>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  useEffect(() => {
    if (!query) return;
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await getPhotos(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  useEffect(() => {
    window.scrollBy({
      top: 1000,
      behavior: "smooth",
    });
  }, [images]);

  const handleSubmit = (value: string): void => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const loadMore = () => {
    setPage((prevPage: number) => prevPage + 1);
  };

  const openModal = (url: string, alt: string): void => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <SearchBar onSubmit={handleSubmit} toast={toast} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isVisible && (
        <LoadMoreBtn onClick={loadMore} disabled={loading}>
          {loading ? "Loading" : "Load more"}
        </LoadMoreBtn>
      )}
      {loading && <Loader />}
      {error && (
        <ErrorMessage textAlign="center">❌ Something went wrong</ErrorMessage>
      )}
      {isEmpty && (
        <ErrorMessage textAlign="center">
          Sorry. There are no images ... 😭
        </ErrorMessage>
      )}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
