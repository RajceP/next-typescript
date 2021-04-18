import { GetServerSideProps, NextPage } from 'next';
interface Props {
  launch: {
    mission: string;
    site: string;
    timestamp: number;
    rocket: string;
  };
}

const IndexPage: NextPage<Props> = ({ launch }) => {
  const date = new Date(launch.timestamp);
  return (
    <div className="container flex justify-center mx-auto align-middle">
      <div className="max-w-lg min-w-0 p-4 m-4 text-black border border-gray-400 border-solid rounded-lg shadow-xs">
        <h4 className="mb-4 font-semibold">
          Next SpaceX Launch: {launch.mission}
        </h4>
        <p>
          {launch.rocket} will take off from {launch.site} on{' '}
          {date.toDateString()}
        </p>
      </div>
    </div>
  );
};

/*
 * More information about getServerSideProps:
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/launches/next');
  const nextLaunch = await response.json();

  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        site: nextLaunch.launch_site.site_name_long,
        timestamp: nextLaunch.launch_date_unix * 1000,
        rocket: nextLaunch.rocket.rocket_name,
      },
    },
  };
};

export default IndexPage;
