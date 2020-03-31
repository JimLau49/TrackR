import React from "react";

export const UserContext = React.createContext([{
    id: "0",
    calories: 0,
    protein: 0,
    fat: 0,
    sodium: 0,
    cholesterol: 0,
}]);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;