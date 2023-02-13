export default function Work(activity) {
  return (
    <div className="activity">
      <div>
        {" "}
        <h6>{activity.activity.title}</h6>{" "}
        <div className="choice">
          <button>.</button>
          <button>.</button>
          <button>.</button>
        </div>
      </div>

      {(() => {
        switch (activity.choice) {
          case "weekly":
            return (
              <div>
                <p>{activity.activity.timeframes[0].weekly[0].current}hrs</p>
                <p>
                  Last Week -{" "}
                  {activity.activity.timeframes[0].weekly[0].previous}hrs
                </p>
              </div>
            );
          case "monthly":
            return (
              <div>
                <p>{activity.activity.timeframes[0].monthly[0].current}hrs</p>
                <p>
                  Last Month -{" "}
                  {activity.activity.timeframes[0].monthly[0].previous}hrs
                </p>
              </div>
            );
          default:
            return (
              <div>
                <p>{activity.activity.timeframes[0].daily[0].current}hrs</p>
                <p>
                  Yesterday -{" "}
                  {activity.activity.timeframes[0].daily[0].previous}hrs
                </p>
              </div>
            );
        }
      })()}
    </div>
  );
}
