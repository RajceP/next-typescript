import { NextPage } from 'next';

export interface Props {
  data: {
    mission: string;
    rocket: string;
    site: string;
    timestamp: number;
  };
}

const Card: NextPage<Props> = ({
  data: { mission, rocket, site, timestamp },
}) => {
  return (
    <div className="max-w-lg min-w-0 p-4 m-4 text-black border border-gray-400 border-solid rounded-lg shadow-xs">
      <h4 className="mb-4 font-semibold">Next SpaceX Launch: {mission}</h4>
      <p>
        {rocket} will take off from {site} on{' '}
        {new Date(timestamp).toDateString()}
      </p>
    </div>
  );
};

export default Card;
