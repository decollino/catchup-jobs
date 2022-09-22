import profileService from '../services/profile.service.js';

async function registerProfile(req, res, next) {
  try {
    console.log('req.body: ', req.body);

    const aboutYouLanguage = req.body.aboutYouLanguage.language.map(
      (userLanguage) => ({
        userId: req.body.aboutYouPi.id,
        name: userLanguage.text,
        level: userLanguage.rating,
      })
    );

    const skills = req.body.skills.skill.map((userSkill) => ({
      userId: req.body.aboutYouPi.id,
      name: userSkill.text,
      yearsOfXp: userSkill.yearsOfXp,
    }));

    const educations = req.body.education.education.map((userEducation) => ({
      userId: req.body.aboutYouPi.id,
      courseName: userEducation.courseName,
      schoolName: userEducation.schoolName,
      degreeName: userEducation.degreeName,
      endPeriod: userEducation.endPeriod,
    }));

    const jobExperiences = req.body.jobExperience.professionalXp.map(
      (profXp) => ({
        userId: req.body.aboutYouPi.id,
        titleName: profXp.jobTitle,
        companyName: profXp.companyName,
        startPeriod: profXp.startPeriod,
        endPeriod: profXp.endPeriod,
        description: profXp.description,
      })
    );

    const profile = {
      aboutYouPi: req.body.aboutYouPi,
      profileUrl: req.body.jobExperience.profileUrl,
      aboutYouCareer: req.body.aboutYouCareer,
      aboutYouLanguage: aboutYouLanguage,
      jobExperience: jobExperiences,
      education: educations,
      skills: skills,
    };

    console.log('***** profile ***** : ', profile);

    const createdProfile = await profileService.registerProfile(profile);
    res.send({ message: 'New Profile Created', profile: createdProfile });

    logger.info(`POST /registerProfile - ${JSON.stringify(createdProfile)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  registerProfile,
};
