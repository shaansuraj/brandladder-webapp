import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useEmailAuth from '../../../hooks/auth/useEmailAuth'

const ServiceCard = ({ image, title, desc, pricing, link, trending = false }) => {

  const { currentUser } = useEmailAuth();

  const descWords = desc.split(' ');
  const truncatedDesc = descWords.slice(0, 20).join(' ');

  return (
    <div className={`card card-image-cover shadow-lg p-4 ${trending ? 'bg-orange-4' : 'bg-orange-3'}`}>
      <img src={image} alt={title} />
      <div className="card-body p-0">
        <h2 className="card-header text-gray-600 text-sm">
          {title}
          {
            trending && (
              <span className="badge badge-outline border-orange-10 text-orange-10">
                Trending
              </span>
            )
          }

        </h2>
        <p className="text-black text-xs">
          {truncatedDesc} <span className='link link-primary text-xs'>Read More ... </span>
        </p>
        <h3>{pricing}</h3>
        <div className="card-footer">

          {
            currentUser ? (
              <button
                onClick={() => console.log('object')}
                className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                Get Plan
              </button>
            ) : (
              <Link to='/signup' >
                <button
                  className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                  SignIn To Select Plan
                </button>
              </Link>
            )
          }

        </div>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pricing: PropTypes.number,
  link: PropTypes.string.isRequired,
}

export default ServiceCard
