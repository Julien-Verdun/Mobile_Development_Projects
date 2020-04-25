/*
This file includes the Description variable, which is an object where keys are the exercise'names and values the exercise's descriptions.
*/

// this function returns the description of the given exercise exerciseName
// or a defined text if no description is available
export function getDescription(exerciseName) {
  if (
    Object.keys(Description).includes(exerciseName) &&
    Description[exerciseName] !== ""
  ) {
    return Description[exerciseName];
  } else if (
    exerciseName[exerciseName.length - 1] === "s" &&
    Object.keys(Description).includes(
      exerciseName.slice(0, exerciseName.length - 1)
    ) &&
    Description[exerciseName.slice(0, exerciseName.length - 1)] !== ""
  ) {
    return Description[exerciseName.slice(0, exerciseName.length - 1)];
  } else {
    return "No description available for this exercise, you can check on the internet :)";
  }
}

export function getImage(exerciseName) {
  if (Object.keys(Image).includes(exerciseName) && Image[exerciseName] !== "") {
    return Image[exerciseName];
  } else if (
    exerciseName[exerciseName.length - 1] === "s" &&
    Object.keys(Image).includes(
      exerciseName.slice(0, exerciseName.length - 1)
    ) &&
    Image[exerciseName.slice(0, exerciseName.length - 1)] !== ""
  ) {
    return Image[exerciseName.slice(0, exerciseName.length - 1)];
  } else {
    return require("./../assets/Exercises/nothing.png");
  }
}

export const Description = {
  Burpees:
    'The burpee, or squat thrust,[citation needed] is a full body exercise used in strength training and as an aerobic exercise. The basic movement is performed in four steps and known as a "four-count burpee". Begin in a standing position. Move into a squat position with your hands on the ground. Kick your feet back into a plank position, while keeping your arms extended. Immediately return your feet into squat position. Stand up from the squat position.',
  "American Swing": "",
  "Box Jump":
    "Throwing a few jumps into your workout builds speed and strength, and is especially useful for people hitting the gym to improve their performance in sports. Plus, jumping as high or as far as you can is also fun and a great way to break any monotony that has crept into your workouts. The box jump is a plyometric move that strengthens your main lower-body muscles – glutes, quads, calves and hamstrings. Box jumps will help make you faster, more powerful and springier than ever, and if you do them for more than a few seconds, they’ll raise your heart rate and burn calories like nobody’s business.",
  Squat:
    "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up. \n Squats are considered a vital exercise for increasing the strength and size of the lower body muscles as well as developing core strength. The primary agonist muscles used during the squat are the quadriceps femoris, the adductor magnus, and the gluteus maximus. The squat also isometrically uses the erector spinae and the abdominal muscles, among others. \n The squat is one of the three lifts in the strength sport of powerlifting, together with the deadlift and the bench press. It is also considered a staple exercise in many popular recreational exercise programs.",
  "Push-up":
    "A push-up (or press-up if the hands are wider than shoulders placing more emphasis on the pectoral muscles) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, or some martial arts disciplines.",
  "Sit-up":
    "The sit-up (or curl-up) is an abdominal endurance training exercise to strengthen, tighten and tone the abdominal muscles. It is similar to a crunch (crunches target the rectus abdominis and also work the biceps and external and internal obliques), but sit-ups have a fuller range of motion and condition additional muscles.",
  "Dumbell Snatch":
    "The dumbbell snatch is a total body exercise that can be beneficial for increasing total body power, strength, and metabolic endurance. Many strength and fitness athletes will find that training the dumbbell snatch (either for heavier power/strength training or for more cardiovascular/muscle endurance training) can be beneficial for overall performance. Start with a dumbbell directly below you, so that you are standing over it evenly. Squat down so that you are in a similar start position to a deadlift, with the chest and head up, and shoulders slightly higher than the hips. Lift the dumbbell with the legs and back, coming straight up with the dumbbell, making sure not to bend the arm early. Once you have pulled as high as you can, turn the elbow underneath the dumbbell, ending in the overhead position of the movement. You can receive the dumbbell in the standing overhead position, similar to the muscle snatch, or you can re-bend the knees and hips to receive the dumbbell at a lower point.",
  Plank:
    'The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time. The most common plank is the forearm plank which is held in a push-up-like position, with the body\'s weight borne on forearms, elbows, and toes. Many variations exist such as the side plank and the reverse plank. The plank is commonly practiced in Pilates and yoga, and by those training for boxing and other sports. The "extended plank" adds substantial difficulty to the standard plank exercise. To perform the extended plank, a person begins in the push-up position and then extends the arms or hands as far forward as possible',
  "Side Plank Left":
    "Lie on your right side, legs extended and stacked from hip to feet. The elbow of your right arm is directly under your shoulder. Ensure your head is directly in line with your spine. Your left arm can be aligned along the left side of your body. Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. \n The side The side plank is a great exercise for strengthening the oblique abdominal muscles, which don't get worked during ab exercises such as crunches. You will hold your body on your side in straight position supported only by one arm and the side of one foot. Strong obliques can be quite useful as core stabilization muscles. Beginners must build the strength and balance needed with warmups for the obliques and modified side planks before progressing to the side plank. You can include side planks in your core exercise routine, Pilates, or yoga practice.",
  Hollow:
    "The hollow body is one of our fundamental holds, because mastering it allows you to do so much more. We use this hold for working on our handstand line, for improving pull-ups, and even for increasing overall body control in locomotive movements. ",
  "Side Plank Right":
    "Lie on your right side, legs extended and stacked from hip to feet. The elbow of your right arm is directly under your shoulder. Ensure your head is directly in line with your spine. Your left arm can be aligned along the left side of your body. Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. \n The side The side plank is a great exercise for strengthening the oblique abdominal muscles, which don't get worked during ab exercises such as crunches. You will hold your body on your side in straight position supported only by one arm and the side of one foot. Strong obliques can be quite useful as core stabilization muscles. Beginners must build the strength and balance needed with warmups for the obliques and modified side planks before progressing to the side plank. You can include side planks in your core exercise routine, Pilates, or yoga practice.",
  Run:
    "Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions). This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion.",
  "Pull-up":
    'A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands and pulls up. As this happens, the elbows flex and the shoulders adduct and extend to bring the elbows to the torso. The term chin-up, traditionally referring to a pull-up with the chin brought over the top of a bar, was used in the 1980s to refer to a pronated, or overhand, grip, with a supinated, or underhand, grip being called a "reverse-grip" chin-up. In later decades, this usage has inverted, with some using "chin-up" to refer to a pull-up done with a supinated hand position, while "pull-up" refers specifically to the exercise done with a pronated hand position. Pull-ups use many different muscles of the upper body, including the latissimus dorsi and the biceps brachii.',
};

export const Image = {
  Burpees: require("./../assets/Exercises/burpees.png"),
  "American Swing": require("./../assets/Exercises/american-swing.jpg"),
  "Box Jump": require("./../assets/Exercises/box-jump.jpg"),
  Squat: require("./../assets/Exercises/squat.jpg"),
  "Push-up": require("./../assets/Exercises/push-up.jpg"),
  "Sit-up": require("./../assets/Exercises/sit-up.png"),
  "Dumbell Snatch": require("./../assets/Exercises/dumbell-snatch.jpg"),
  Plank: require("./../assets/Exercises/plank.jpg"),
  "Side Plank Left": require("./../assets/Exercises/side-plank.png"),
  Hollow: require("./../assets/Exercises/hollow.jpg"),
  "Side Plank Right": require("./../assets/Exercises/side-plank.png"),
  Run: require("./../assets/Exercises/run.png"),
  "Pull-up": require("./../assets/Exercises/pull-up.jpg"),
};
