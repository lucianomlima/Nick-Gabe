const { drawFollowerImage } = require('../utils/drawFollowerImage');
const { getLastFollower } = require('../utils/githubApi')

module.exports = async function (data) {
  const follower = await getLastFollower(data.user);
  const imageName = 'lastFollower.png'

  drawFollowerImage(follower, imageName)

  return `<a href="${follower.html_url}" alt="${follower.name}"><img style="height:150px;" src=./src/resources/images/${imageName} alt="Last follower"/></a>`;
};
