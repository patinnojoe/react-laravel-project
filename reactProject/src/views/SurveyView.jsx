import { useState } from "react";
import { PageComponent } from "../components";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { TButton } from "../core";

function SurveyView() {
  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("hello");
  };

  const onImageChange = () => {
    console.log("image change");
  };
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    status: "false",
    description: "",
    image_url: null,
    image: null,
    expire_date: "",
    questions: [],
  });
  return (
    <PageComponent title="Create Survey">
      <form action="#" method="POST" onSubmit={onSubmit}>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            {/* input field for image */}
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex items-center">
                {survey.image_url && (
                  <img
                    src={survey.image_url}
                    className="w-32 h-32 object-cover"
                  />
                )}
              </div>

              {!survey.image_url && (
                <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <PhotoIcon className="h-6 w-6" />
                </span>
              )}

              <button
                type="button"
                className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <input
                  type="file"
                  className="absolute left-0 top-0 bottom-0 opacity-0"
                  onChange={onImageChange}
                />
                change
              </button>
            </div>
            {/* input field for image */}

            {/* title starts */}
            <div className="col-span-6  sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={(evt) =>
                  setSurvey({ ...survey, title: evt.target.value })
                }
                value={survey.title}
                placeholder="Survey Title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* title ends */}

            {/* description starts */}
            <div className="col-span-6  sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                onChange={(evt) =>
                  setSurvey({ ...survey, description: evt.target.value })
                }
                value={survey.description}
                placeholder="Survey Description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* decription ends */}

            {/* expire starts */}
            <div className="col-span-6  sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Expire Date
              </label>
              <input
                type="date"
                id="expire_date"
                name="expire_date"
                onChange={(evt) =>
                  setSurvey({ ...survey, expire_date: evt.target.value })
                }
                value={survey.expire_date}
                placeholder="Survey Description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* expire ends */}

            {/* active starts */}
            <div className="flex items-center ">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  id="status"
                  name="status"
                  onChange={(evt) =>
                    setSurvey({ ...survey, status: evt.target.checked })
                  }
                  value={survey.status}
                  placeholder="Survey Description"
                  className="h-4 w-4 ruonded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="status">Status</label>
                <p className="text-gray-500">
                  Whether to make your survey publicly available
                </p>
              </div>
            </div>
            {/* expire ends */}

            {/* submit btn */}
            <TButton>Submit</TButton>
          </div>
        </div>
      </form>
    </PageComponent>
  );
}

export default SurveyView;
