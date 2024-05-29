import PlasticProblem from '../components/Plastic/PlasticProblem';
import { useRequireAuth } from '../hooks/useRequireAuth';

function PlasticProblemPage() {
  useRequireAuth();

  return (
    <>
      <PlasticProblem />
    </>
  );
}

export default PlasticProblemPage;
