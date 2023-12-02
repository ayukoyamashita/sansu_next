import {BookOpenIcon} from '@heroicons/react/24/solid';

const Question = () => {
  return (
    <div className="flex-1 text-7xl">
      <div className="flex h-full flex-wrap items-center ml-10">
        <div>
          <p className=" text-4xl mb-8"><BookOpenIcon className="inline-block align-sub mr-3 text-blue-500 h-10 w-10"/>もんだい1</p>
          <div className="flex items-center">
            <p className="inline-block mr-4">5 x 5 = </p>
            <p className="relative inline-block w-52 border-4 rounded-2xl py-4 px-7 text-center">25
              {/*<img src="maru.png" alt="正解" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none w-64 opacity-50"/>*/}
              <img src="batsu.png" alt="不正解" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none w-64 opacity-50"/>
              <span className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-rose-500">25</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Question;