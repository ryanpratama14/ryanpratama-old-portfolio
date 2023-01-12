import { useNavigate } from "react-router-dom";

function Card({ nameProps, ageProps }) {
  const navigate = useNavigate();

  return (
    <div className="card image-full mb-6">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="  text-center text-white text-2xl font-bold ">
          FaoTech's member
        </h2>
        <p className="text-xl text-center text-white">
          {nameProps}, {ageProps} years old
        </p>

        <div className="card-actions justify-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/form-app");
            }}
          >
            Start your course now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
