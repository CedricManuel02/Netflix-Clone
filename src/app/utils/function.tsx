    
    export const header = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmJkODY0NmRlNzM3MGUxYmYwMDlkYmZhODVkM2Q4YyIsInN1YiI6IjY0NjI2ZDE2ZWY4YjMyMDBmZTdlMWQ2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HfbEGyxcOBVOfnflI-Vloa4et-_gcLdSCg5SwNYOpI",
        },
      };

     export const formatRuntime = (runtime: number) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        if(!Number.isNaN(hours) || !Number.isNaN(minutes)){
          return (
            <span>
              {hours}h {minutes}m
            </span>
          );
        }
        return (<span>
         N/A
        </span>)
      };