import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { PageComponent, SurveyList } from "../components";
import { UseStateContext } from "../contexts";
import { TButton } from "../core";

function Surveys() {
  const { survey } = UseStateContext();
  const onDeleteClick = () => {
    console.log("delte");
  };
  return (
    <PageComponent
      title="Survey"
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create New
        </TButton>
      }
    >
      <p>this is the survey</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {survey.map((survey) => (
          <SurveyList
            key={survey.id}
            survey={survey}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </PageComponent>
  );
}

export default Surveys;
