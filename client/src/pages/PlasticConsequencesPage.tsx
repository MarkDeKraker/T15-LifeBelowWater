import PlasticConsequences from '../components/Plastic/PlasticConsequences';
import { useRequireAuth } from '../hooks/useRequireAuth';

function PlasticConsequencesPage() {
  useRequireAuth();

  return (
    <>
      <PlasticConsequences />
    </>
  );
}

export default PlasticConsequencesPage;
