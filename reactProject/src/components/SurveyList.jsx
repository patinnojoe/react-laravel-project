import PropTypes from "prop-types";

import {
  TrashIcon,
  PencilIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { TButton } from "../core";

function SurveyList({ survey, onDeleteClick }) {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-grey h-[470px]">
      <img
        src={survey.image_url}
        alt={survey.title}
        className="w-full h-48 object-cover"
      />

      <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: survey.description }} />

      <div className="flex justify-between items-center mt-3">
        {/* update survey */}
        <TButton to={`surveys/${survey.id}`}>
          <PencilIcon className="w-5 h-5 mr-2" />
          Edit
        </TButton>
        {/* guest user view */}

        <TButton href={`/view/surveys/${survey.slug}`} circle link>
          <ArrowTopRightOnSquareIcon className="w-5 h-5 " />
          Edit
        </TButton>

        {/* delete  */}
        {survey.id && (
          <TButton
            onClick={onDeleteClick}
            href={`/view/surveys/${survey.slug}`}
            circle
            link
            color="red"
          >
            <TrashIcon className="w-5 h-5 " />
            delete
          </TButton>
        )}
      </div>
    </div>
  );
}

export default SurveyList;

// prop validation

SurveyList.propTypes = {
  survey: PropTypes.object,
  onDeleteClick: PropTypes.func,
};
