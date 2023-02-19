import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { Information } from "./Information";
import data from '../data'
import user from '../user'

export const App = () => {
return (
  <div>
   <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
   </div>; 
   <div>
    <Information 
    stats={user.stats}
    />
   </div>
    <div>
      <Statistics 
      title="Upload stats"
      stats={data}
      /> 
    </div>;
  </div>
  );
};