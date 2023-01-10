import React from "react";
const Team = (props) => {
  const { team } = props;
  return (
    <div>
      {team.map((member) => (
        <p>
          {member.name},{member.email}
        </p>
      ))}
    </div>
  );
};
export default Team;
