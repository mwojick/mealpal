import axios from "axios";

export const updateUser = user => {
  return axios({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {
      user: {
        email: user.email,
        password: user.password,
        name: user.name,
        treats_left: user.treatsLeft,
        preferred_city: user.preferredCity,
        company_name: user.companyName,
        image_url: user.imageUrl
      }
    }
  });
};
