'use strict';

const {
  db,
  models: {User, Review, Section},
} = require('../server/db');

const reviews = [
  {
    sectionId: 3,
    format: 'loose-leaf',
    teaName: 'Copper Knot Hongcha',
    flavors: 'Natural',
    obtainedFrom: 'Teavana',
    cost: 980,
    perQty: '2 oz',
    brewingStyle:
      'Filled electric kettle with cold, filtered water. Heated to 190F. Steeped 2 scoops tea in 2 cups water (in a large teapot) for 2 minutes. Strained out tea leaves while pouring tea into mugs.',
    rebrewing:
      "Although we didn't brew it a second time, from the light flavor I would expect this tea would probably make a decent second brew but lose flavor by the third. Still, we didn't actually try it, so I wouldn't say for sure.",
    review:
      "To me Copper Knot really does taste vaguely like copper. It's a classic, natural \"black tea\" taste, but because it's a lighter flavor than most black teas, it winds up almost tasting metallic, with a hint of citrus tang minus the citrus taste. I think it's a tea that should be drunk plain--milk and sugar would certainly be too much and overpower the flavor--but if you were going to sweeten it, a little lemon and honey would probably go very well. \n\n  I really like this tea. Even though it was named for its color and not its flavor, the name is apt for the taste, too. It's something I can see drinking in the afternoon, curled up with a good book or just relaxing on the balcony. If you like unflavored English Breakfast or Earl Grey, especially if you drink either plain or with lemon and honey, you'd probably like Copper Knot. Do remember that it's not as strong and will probably taste weak the first time you sip it, but don't overbrew it to compensate (We brewed it too long the first time and it came out quite bitter and far too dark, ruining the tea. Go with 2 minutes instead of 3 and don't use water that is too hot). The lighter flavor is part of the charm, and is what creates the unique metal taste.",
  },
  {
    sectionId: 7,
    format: 'loose-leaf',
    teaName: 'Silver Yin Zen Pearls',
    flavors: 'Natural',
    obtainedFrom: 'Teavana',
    cost: 2200,
    perQty: '2 oz',
    brewingStyle:
      'Filled a copper-bottomed kettle with water, heated on stove until I heard it begin to bubble (did not let it get to the whistling stage). Using a cast-iron teapot (2 person teapot; holds apprx. 16 oz), added 3 tsp of tea. Poured water over 2 ice cubes over tea, steeped for 2 minutes.',
    rebrewing:
      "Even after four brews, it still has an excellent flavor. I know brewed it too hot once, and too long another time, and while the flavor became a little bitter, it wasn't too bitter, so it's fairly resilient.",
    review:
      "Normally, this tea is outside my price range (I try to be strict with my budget), but with a 75% off sale, I took the chance to treat myself. And I will say, this is a very nice white tea. Unfortunately, it's not on the website as of this posting, so you'll have to chance a trip into the store in person to try to find it, or buy it from another site. \n\n  For a first-cup taste, it's a good, high-quality white tea. White teas tend to be very mild tasting (if you haven't had it before, think 'green tea light' or 'slightly flavored hot water'). They're great for antioxidants, and I personally like the flavor, but many people find white teas too light. I brewed an extra teaspoon over what's recommended for my first try, so my tea was stronger than normal, which I enjoy. The next time I made it, I used closer to the recommended 1 tsp for 8 oz, and still found it full-bodied for a white tea. That said, I've had comparable quality flavor at less of a price. \n\n    Where this tea really stands out to me is in the rebrew. I don't think I've ever had a white tea that still had this much flavor after four brews. And making the tea the next day at work, I had 3 rebrews throughout the day, all still richly flavored. I didn't try brewing it a fourth only because I went home. \n\n   If you're still getting used to teas and need stronger flavors, you might want to find a less expensive white tea and add a touch of lemon or a raspberry. I wouldn't recommend beginning to drink white tea with this tea, because if I hadn't tried a wide variety of white teas, I wouldn't really appreciate how nice this one is. It's really too expensive a tea to want to dilute the taste by adding anything. Maybe a drop of honey or sugar if you prefer your tea sweetened, but keep it light enough not to cover the taste of the tea itself, or you'll just be wasting your money. However, if you like the taste of plain white tea and will be drinking tea for a long enough period of time to need multiple rebrews, it may well be worth the investment.",
  },
  {
    sectionId: 4,
    format: 'loose-leaf',
    teaName: 'Sunflower Jasmine Tea',
    flavors: 'floral, natural',
    obtainedFrom: 'Asian Market',
    cost: 699,
    perQty: '0.5 pound',
    brewingStyle:
      'Filled a mug with hot water from the coffee maker at work. Walked back to my desk, added 2.5 tsp loose-leaf tea (in strainer) to 12oz mug. Waited about 2 minutes or so and removed.',
    rebrewing: 'Usually good for at least one rebrew.',
    review:
      "The smell of this tea is heavenly. I'd know it was jasmine tea without ever reading the label! It's pretty sensitive, though: I think I burnt the leaves either by oversteeping or using water that was too hot, and since it was coffee machine water (slightly cooled, even) and I steeped it less than 2 minutes, that means it's a finicky brand. Definitely becomes bitter when oversteeped, but from prior experimentation, I know it can also be slightly sweet and completely not bitter if prepared carefully.\n\n I do taste both green tea and a floral note, which means neither flavor overpowers the other. It's a nicely balanced blend, and while I'm usually senstive to bitter, the strong jasmine scent makes me enjoy it even poorly brewed. I'm actually very fond of this tea (okay, so it was the first loose-leaf tea I ever tried, a gift from a college roommate) and while it's not the fanciest tea I've had, it's inexpensive, tasty, and sweetly scented. /n/n  Despite starting on this tea myself, it's probably not the best first-ever loose-leaf green tea. Once you've come to enjoy green tea with a more resilient brand, then it's a nice tea for learning to brew delicate teas, as you'll know when you get it wrong but it'll still be drinkable. It does take some practice to not make bitter, but at the price (you can get a pound on Amazon for under $10), you can experiment all you want. Its also a good go-to tea for a pick-me-up anytime, especially on a budget--always make me feel like I'm drinking flowers! If you dislike floral teas, however, this is absolutely the wrong tea for you.",
  },
  {
    sectionId: 3,
    format: 'loose-leaf',
    teaName: 'Festivus',
    flavors: 'Floral, spicy',
    obtainedFrom: 'Tin Roof Teas',
    cost: 1000,
    perQty: '250 grams',
    brewingStyle:
      '3 tsp in a tea strainer, hot water from the break room coffee machine poured in until 12oz mug full, steeped for 2 minutes.',
    rebrewing:
      "A little lighter colored on the second brew, not quite as strong in flavor. Didn't try a 3rd brew but I expect it wouldn't do well.",
    review:
      "I expected a darker brew from a black tea, but it's fairly light even on the first brew. But since it's got at least as much in the way of other ingredients as it does tea leaves, that's not entirely a surprise. There are actually dried orange peels in this one. Despite the poor rebrewing, it's a pretty good tea, with half the pleasure in the scent. \n\n  Spices include black tea, cinnamon, cardamom, cloves, and pink peppercorn; it also includes orange and apple pieces. I'm pretty certain the black tea is just so you can say it's caffeinated, because I barely taste the tea at all. However, I happen to like the smell of orange and spices, so I like this tea. If you enjoy fruity herbal teas or Bigelow's Constant Comment, you'd probably like this one, too. I honestly haven't tried the latter, so I can't tell you exactly how they compare.",
  },
  {
    sectionId: 8,
    format: 'loose-leaf',
    teaName: 'Rooibos Cream Caramel',
    flavors: 'natural',
    obtainedFrom: 'Tin Roof Teas',
    cost: 817,
    perQty: '100 grams',
    brewingStyle:
      '3 teaspoons in a tea strainer in a cast iron pot. Water boiled in kettle until just whistling, then poured over leaves. Brewed 2-3 minutes, not timed.',
    rebrewing: 'Have not rebrewed',
    review:
      "I've always found rooibos to be interesting teas. They taste vaguely fruity to me without tasting fruity (yes, I know that makes no sense!). This red tea brews a rich caramel color, and smells like caramel heated to the point of almost but not quite burnt (I think that's the \"creme\"), but doesn't taste like caramel. It's not dissimilar to black tea in taste, but lacks the bite of the tannins that give black tea the black tea taste, and is just a tad tangier. And that's the best I can describe it. /n/n  I feel like this tea would do very well with sugar, maybe a touch of milk or cream. It practically begs to be blended with other teas. I'd add it to an early grey, I think, to enhance the black tea scent, or a maybe a \"sweet\" tea like a chai or Teavana's Slimful Chocolate Decadence. On its own, I don't find it particularly extraordinary in terms of rooibos teas. It smells amazing, but the caramel flavor is almost unnoticeable as compared to regular rooibos tea.  \n\n  Not quite as caramel-colored with  milk and sugar... But tastier! \n\n   I did add milk and sugar my second cup, and it much improved the flavor. Normally I dislike sweetening my tea, but in this tea it really balances it out. I highly recommend having milk and sugar at hand if you plan to drink this tea without blending it with something else. \n\n  Not my favorite tea, despite the smell. The scent sets up high expectations for the flavor, but the flavor falls short of the promise without sweetening it, and I like a tea that can stand on its own. On the other hand, sweetened it's actually quite good. I'd say it's best for blending with other teas. If you like fruity teas and black teas, but want to cut out the caffeine, rooibos might be a good match for you.",
  },
  {
    sectionId: 5,
    format: 'loose-leaf',
    teaName: 'Osmanthus Jin Xuan',
    flavors: 'Floral, earthy, milky',
    obtainedFrom: 'Taiwan, or TenRen',
    cost: 1000,
    perQty: '100 grams',
    brewingStyle:
      'Water from a coffee machine (about 190 F) over 1 rounded teaspoon (sometimes 1.5 flat teaspoon) in a 12 oz mug, steeped for about 3 minutes',
    rebrewing:
      "Holds up for at least 3 rebrews; haven't tried more than that, but good oolong is supposed to be rebrewed several times. Flavor slightly lighter second brew, with harsher notes faded, but still strong and complex",
    review:
      "I would go to Taiwan just to get more of this tea. \n\n Okay, that's a hyperbole, especially since it's available online. But if it wasn't, and I was going to Taiwan, getting more would be on the list of things to do, because for its price it's exceptional. Note that some of the other places that sell it online, such as Amazon, charge $20 for the tin, so I suggest buying through the main site. \n\n  The smell is engaging and at least half, if not 75%, of the attraction. It's a balance between the earthy, fermented oolong and flowers--think peat moss and osmanthus (a Chinese flower that reminds me of the American mums that come out every fall, or even a bit of heavy sunflower). It's very relaxing, and something about it makes me feel connected to nature and/or anyone I've roped into drinking it with me. \n\n  As far as taste goes, it's light, and if prepared with a short brew and water under 190, just a bit sweet. Even fully steeped the color is a light gold. It's not heavy on flavor; if you want it strong (admittedly, I usually do myself), bump up the tea by an extra half-teaspoon or so. A little goes a long way, though, and 1.5 tsp usually fills my tea strainer 3/4 full by the time the tea has fully expanded. I'd say it tastes good, but on par with a good tea for its price range, so if you drink more for flavor than aroma, you'll probably still like it, but be less in love with it. \n\n  Like most teas, steeping too hot or too long can make it bitter; it's fairly resilient but not exceptionally so. On a scale of 1 (brew it perfect or hate it) to 10 (throw in the tea and some boiling water and then go do the laundry; it'll be fine!), I'd give it about a 6, with most teas falling in the 3-5 range. \n\n If you like oolongs, I'd recommend this tea. If you've never tried oolong before, it's not a terrible place to start, so long as you enjoy floral teas (if you like both green tea and black tea, there's a good chance you'll like oolongs, since it's a light flavor but a strong aroma; if you don't like both, it's a 50-50); be prepared for a different scent than you're used to, since oolong teas are fermented. If there's a tea store near you that offers sampling, or one of your friends has some, I suggest doing a couple of tastings. Try it twice before you make up your mind, because it's kind of unexpected the first time you try it, so it helps to have a second tasting knowing what to expect.",
  },
  {
    sectionId: 5,
    format: 'loose-leaf',
    teaName: 'Coconut Oolong',
    flavors: 'Coconut',
    obtainedFrom: 'Tea and Spice Exchange, Blowing Rock, NC',
    cost: 549,
    perQty: '1 oz',
    brewingStyle:
      'Water from the coffee machine poured over 1.5 tsp in a 16 oz mug, steeped for about 2-3 minutes.',
    rebrewing:
      "Rebrews well for a second brew. It's an oolong, which you're supposed to rebrew multiple times anyway to get the \"full oolong experience,\" which is another way of saying it's a great tea for re-steeping. Flavor holds up for at least 3 rebrews; I haven't gone past that yet. ",
    review:
      "Word of warning, if you don't like coconut, you'll hate it; and the coconut flavor is obtained by artificial coconut flavor. But I do like coconut, and I find the taste of this tea fantastic. The coconut is more in the scent than the flavor--although it has a strong coconut smell, the taste of toasted coconut is rather light and mostly notable in the aftertaste. \n\n In terms of flavor, it's a good-quality oolong tea, if not a particularly fancy one. It's pretty resilient; I've brewed it with both water too hot and too cool, and it turned out okay with the too hot, and fine with the water a bit too cool (a bit light on the first brew with cool water, but the second brew with normal-heated water was full flavored). It's got a bold-for-oolong flavor; the coconut seems to more enhance the natural oolong flavor than be tasted itself, and I think may contribute to the resiliency of the tea, covering up brewing mistakes that might otherwise taste bitter or flavorless.  If what you love about oolong is the scent, you'll miss it with this tea. It's one of the two things I dislike about this tea, but the coconut smell completely covers the rich oolong scent (the other thing: I'd have preferred real coconut to artificial). However, I like how it does smell almost as much, so there's that. \n\n Admittedly, I also hit up Asian food stores for my oolongs, so I'm a bit spoiled on prices and find it on the high end. However, although the price per ounce adds up, it's in line with Teavana, even a bit cheaper than most of the Teavana oolongs, so it's definitely not unreasonable. On the whole, I give it excellent scores for taste, resiliency, and ability to rebrew. If you re-steep your leaves, it's worth the price, and I would definitely recommend it. \n\n  It won't give you a great idea of what oolongs in general taste like, but it's delicious and a unique tea for habitual oolong drinkers. If you want to buy another tea for a collection and can only buy one, compared to the Osmanthus Chin Hsuang, I'd definitely say go with the chin hsuang if you can find it, but you'll have a much easier time finding this one, and it's good enough you won't feel you're missing anything.",
  },
];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

// async function seed() {
//   await db.sync({ force: true }); // clears db and matches models to tables
//   console.log('db synced!');
// }
// Creating Users
// const users = await Promise.all([
//   User.create({ username: 'cody', password: '123' }),
//   User.create({ username: 'murphy', password: '123' }),
// ]);

// Creating TeaTypes
const types = [
  {
    title: 'WELCOME',
    time: 0,
    description:
      'Behold, it is--you invited in-- <Text style={styles.highlight}>TEEEEAAAAAAA</Text> Noooo, what have you DONE!? Nothing left to do but drink it all.',
    instructions: '',
  },
  {
    title: 'About Tea',
    time: 0,
    description:
      "In actuality, all tea comes from a singular plant, called{' '} <Text style={styles.ital}>Camellia sinensis</Text>. The various different types and ﬂavors of tea result from processing the{' '} <Text style={styles.ital}>Camellia sinensis</Text> leaf in different ways, or blending it with other things (such as herbs, ﬂowers, and fruits). (Tea without{' '} <Text style={styles.ital}>Camellia sinensis</Text> is actually 'herbal' tea, aka tisane; or rooibos tea ('red' tea if you're in the West).) {'\n\n'} How can so many different types of tea all come from the same tea leaf? It all has to do with how the leaves are processed. Let’s quickly review some of the more well-known types:",
    instructions: '',
  },
  {
    title: 'Black Tea',
    time: 4000 * 60,
    description:
      "Or 'Red Tea' if you are from the East! {'\n\n'} Black tea is fully oxidized, and comes from a variety of regions worldwide, from Ceylon to Assam to Darjeeling. Earl Grey is famous black tea, and of course, if you picture a high tea with scones and jam, this is what you would be drinking. It has strong tannins and can be bitter if brewed incorrectly, and a popular way to drink it is sweetened with sugar and milk or lemon and honey. However, it is delicious plain, too.",
    instructions:
      'Water temp: boiling. Pour over leaves and steep for 3-5 minutes. Some teas will get bitter easily; if the first time your tea is bitter, brew either for a shorter time period, with slightly cooler water, or both. Best for 1-2 steepings.',
  },
  {
    title: 'Green Tea',
    time: 3000 * 60,
    description:
      'The tea leaf is unwilted and unoxidized. Green tea is often associated with Asian cultures, but it is enjoyed worldwide. You classic gyokuro, sencha, and matcha are all types of green tea. Some kinds of green tea, people can find grassy; other varieties are more umame in flavor. It too can turn bitter when brewed hot or long, as too-hot water releases the tannins, and steeping it too long also releases the tannins.',
    instructions:
      'Water temp: 175 degrees F. Pour over leaves and steep for 2-3 minutes. If bitter, use cooler water or steep for a shorter time. Green teas become bitter easily if overbrewed. Usually resteeps pretty well, 2-3 brews.',
  },
  {
    title: 'Oolong Tea',
    time: 500 * 600,
    description:
      'The tea leaf is wilted, bruised, and partially oxidized. Taiwan is particularly well-known for its oolong tea. Oolongs tend to be earthy in flavor and scent, but light-tasting. They rebrew very well, and depending on what variety you go with, can change flavor with each brew (Eastern Beauty teas, for example, become sweeter with each brew but have a lightly fruity taste at first; while hihg-mountain oolongs tend to be richly earthy, and milk oolongs may have an almost creamy scent).',
    instructions:
      'Water temp: 190 degrees F. Rinse by pouring over leaves and steeping for 10 seconds, then pouring out this first pot (optional, helps opens leaves up and removes possible dirt). To steep, pour over leaves and steep 30-45 seconds for a first steeping. Add 15 seconds for each following steeping. Increase water temp by 10 degrees if flavor starts to fade. Resteeps fantastically. Good oolongs can resteep so well, I have ran out of day before running out of flavor.',
  },
  {
    title: 'Herbal Tea',
    time: 5000 * 60,
    description:
      'Herbal teas do not contain Camellia sinesis, and therefore are technically tisanes, not teas, in the semantic sense. However, in the coloquial use of the word, just about everyone agrees they count as tea. Most herbal teas contain no caffeine--they are made by steeping fruits, herbs, seeds, spices, and/or other ingredients in hot water. That makes them popular both for people who are new to tea and for people who want to sleep well at night without a caffeine rush keeping them up.',
    instructions:
      "Water temp: boiling. Pour over leaves and steep for 5+ minutes. Forget it exists, even--it's fine. Most herbal teas do not get bitter. Don't bother resteeping, not usually good for more than the first brew.",
  },
  {
    title: 'White Tea',
    time: 2500 * 60,
    description:
      'The tea leaf is wilted and unoxidized or only slightly oxidized. White tea is a very light-flavored tea, and is known for having high amounts of antioxidants in it. Because of the light flavor, people who dislike the tea flavor often mix it with fruit and enjoy it for the antioxidants; but the flavor is on its own worth indulging in for those who enjoy tea.',
    instructions:
      'Water temp: 175 degrees F. Pour over leaves and steep 2-3 minutes. Resteeps well for multiple steepings.',
  },
  {
    title: 'Other Teas',
    time: 0,
    description:
      'There are other categories and sub-categories teas, too, such as pu-erh tea (usually considered a type of black tea), yerba mates, rooibos, blooming teas, Eastern Beauty (aka "puff" or "formosa") tea, and more. But let\'s just stick to the basics for now, because I don\'t want to spend all afternoon finding good research.',
    instructions: '',
  },
];

// Creating Users
const seed = async () => {
  try {
    await db.sync({force: true});
    console.log('db synced!');
    // seed users database
    // const seedUsers = await Promise.all(
    //   users.map((user) => {
    //     return User.create(user);
    //   })
    // );
    // seed products database
    const seedSections = await Promise.all(
      types.map(tea => {
        return Section.create(tea);
      }),
    );
    const seedReviews = await Promise.all(
      reviews.map(review => {
        return Review.create(review);
      }),
    );
    console.log('successfully seeded!');
    return [seedReviews, seedSections];
  } catch (err) {
    console.log(err);
  }
};

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
