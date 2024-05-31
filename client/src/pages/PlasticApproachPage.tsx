import PlasticApproach from '../components/Plastic/PlasticApproach';
import { useRequireAuth } from '../hooks/useRequireAuth';

function PlasticApproachPage() {
  useRequireAuth();

  return (
    <>
      <PlasticApproach />
    </>
  );
}

export default PlasticApproachPage;
