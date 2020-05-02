/*
This file includes the Description variable, which is an object where keys are the exercise'names and values the exercise's descriptions.
*/

/*
This function returns whether or not the array includes the given elt, and it is case insensitive.
If the elt is in the array or at list a patrt of the elt, the function returns the key to access the elt, 
at least the most probable one.
*/
function objIncludes(objElt, exerciseName) {
  let lwElt = exerciseName.toLowerCase();
  let listObjElt = Object.keys(objElt).map((elt) => {
    return elt.toLowerCase();
  });
  // si le nom de l'exercise est directement dans les cles
  if (listObjElt.includes(lwElt)) {
    return Object.keys(objElt)[listObjElt.indexOf(lwElt)];
  }
  // si le nom de l'exercise avec un s en moins est dans les cles
  else if (
    lwElt[lwElt.length - 1] === "s" &&
    listObjElt.includes(lwElt.slice(0, lwElt.length - 1))
  ) {
    return Object.keys(objElt)[
      listObjElt.indexOf(lwElt.slice(0, lwElt.length - 1))
    ];
  }
  // sinon on cherche celui qui s'en rapproche le plus (contient un bout du nom de l'exercise)
  else {
    if (lwElt.includes(" ")) {
      let splitName = lwElt.split(" ");
      for (var i = 0; i < splitName.length; i++) {
        for (var j = 0; j < listObjElt.length; j++) {
          if (
            listObjElt[j] === splitName[i] ||
            (splitName[i][splitName[i].length - 1] === "s" &&
              listObjElt[j] === splitName[i].slice(0, splitName[i].length - 1))
          ) {
            return Object.keys(objElt)[j];
          }
        }
      }
    }
  }
  return null;
}

// this function returns the description of the given exercise exerciseName
// or a defined text if no description is available
export function getDescription(exerciseName) {
  let arrayElt = objIncludes(Description, exerciseName);
  if (arrayElt !== null) {
    return Description[arrayElt];
  } else {
    return "No description available for this exercise, you can check on the internet :)";
  }
}

export function getImage(exerciseName) {
  let arrayElt = objIncludes(Image, exerciseName);
  if (arrayElt !== null) {
    return Image[arrayElt];
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
  "Jumping Jack":
    "A jumping jack (Canada, US and Ireland) or star jump (UK and other Commonwealth nations), also called side-straddle hop in the US military, is a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands going overhead, sometimes in a clap, and then returning to a position with the feet together and the arms at the sides.",
  "Jumping Lunges":
    "Being able to perform the jumping lunge exercise successfully depends on how strict you can keep your form, how smooth you can make the transition, and how gently you can land. Here are the steps to do the jumping lunge exercise properly, safely, and effectively. Before starting, make sure you have a space large enough to perform the move. Also consider moving benches and other equipment out of the way. \nStand with feet shoulder-width apart, with your core engaged. \nTake a big step forward with your right leg. Keep your arms by your side. \nShift your weight forward with this leg, so your heel touches the floor first. Then lower your body until the forward leg is parallel to the floor. This is the bottom position. \nJump up, quickly switching the position of your feet while mid-air so your right leg moves back behind you and your left leg comes forward. To help you move explosively, propel your arms into the air while you jump. \nGently land back on the floor in a basic lunge position with the opposite leg forward. \nRepeat this movement pattern, switching legs on each jump, for the desired amount of time or repetitions. Beginners should aim for 5 to 10 reps on each leg or 30 seconds total. As this gets easier, work your way up to 60 seconds of continuous jumping lunges",

  "Diamond Push-up":
    "The diamond push-up is a compound exercise that works your chest, core, back, shoulders, triceps – even the quads and glutes. They’re performed by placing your feet and hands on the floor (with opposite hands touching) with your back straight and using your chest and arm muscles to descend and ascend the weight of your body off the floor.",

  "Double-Under": "A high basic jump, turning the rope twice under the feet.",
  "Toes To Bar":
    "The toes to bar exercise is a CrossFit movement that combines abdominal training with agility. It focuses largely on building abdominal and overall core strength. By implementing the toes to bar exercise into your CrossFit WOD (workout of the day), you will effectively improve your endurance, stamina, and develop the strength of your core while really targeting your lower abdominal muscles extremely well.",
  Lunge:
    "A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind. It is used by athletes in cross-training for sports, by weight-trainers as a fitness exercise, and by practitioners of yoga as part of an asana regimen.\nIn contrast to the Split squat exercise, during the lunge the rear leg is also activated.",
  Dip:
    "A dip is an upper-body strength exercise. Narrow, shoulder-width dips primarily train the triceps, with major synergists being the anterior deltoid, the pectoralis muscles (sternal, clavicular, and minor), and the rhomboid muscles of the back (in that order).[1] Wide arm training places additional emphasis on the pectoral muscles, similar in respect to the way a wide grip bench press would focus more on the pectorals and less on the triceps.",
  "Handstand Push-up":
    'The handstand push-up (press-up) - also called the vertical push-up (press-up) or the inverted push-up (press-up) also called "commandos"- is a type of push-up exercise where the body is positioned in a handstand. For a true handstand, the exercise is performed free-standing, held in the air. To prepare the strength until one has built adequate balance, the feet are often placed against a wall, held by a partner, or secured in some other way from falling. Handstand pushups require significant strength, as well as balance and control if performed free-standing.',
  "Russian Swing":
    "The kettlebell swing (AKA Russian swing, double-arm swing, or conventional kettlebell swing) is a basic ballistic exercise used to train the posterior chain in a manner similar to broad jumping. The kettlebell is swung from just below the groin to somewhere between the upper abdomen and shoulders, with arms straight or slightly bent, the degree of flexion depends on the trajectory of the kettlebell. The key to a good kettlebell swing is effectively thrusting the hips, not bending too much at the knees and sending the weight forwards, as opposed to squatting the weight up, or lifting up with the arms. Some knee flexion (a squat) is commonly employed during the swing, although there is some controversy[citation needed] as to whether a swing can or should be performed with just a hip hinge instead. This exercise requires an intense contraction of the gluteal, abdominal and latissimus muscles.",
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
  "Jumping Jack": require("./../assets/Exercises/jumping-jack.jpg"),
  "Jumping Lunges": require("./../assets/Exercises/jumping-lunges.png"),
  "Diamond Push-up": require("./../assets/Exercises/diamond-push-up.png"),
  "Double-Under": require("./../assets/Exercises/double-under.png"),
  "Toes To Bar": require("./../assets/Exercises/toes-to-bar.jpg"),
  Lunge: require("./../assets/Exercises/lunges.jpg"),
  Dip: require("./../assets/Exercises/dips.jpg"),
  "Handstand Push-up": require("./../assets/Exercises/hspu.png"),
  "Russian Swing": require("./../assets/Exercises/russian-swing.png"),
};
