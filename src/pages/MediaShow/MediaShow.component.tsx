import './MediaShow.scss';
import {
  useParams,
} from "react-router-dom";

export const MediaShow = () => {
const { title } = useParams();
console.log('title?', title)

  return <h1>{title}</h1>
}