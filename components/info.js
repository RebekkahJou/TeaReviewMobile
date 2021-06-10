const allSections = {
  WELCOME: {
    id: 1,
    title: 'WELCOME',
    time: 0,
    description:
      'Behold, it is--you invited in-- <Text style={styles.highlight}>TEEEEAAAAAAA</Text> Noooo, what have you DONE!? Nothing left to do but drink it all.',
    instructions: '',
  },
  About: {
    id: 2,
    title: 'About Tea',
    time: 0,
    description:
      "In actuality, all tea comes from a singular plant, called{' '} <Text style={styles.ital}>Camellia sinensis</Text>. The various different types and ﬂavors of tea result from processing the{' '} <Text style={styles.ital}>Camellia sinensis</Text> leaf in different ways, or blending it with other things (such as herbs, ﬂowers, and    fruits). (Tea without{' '}    <Text style={styles.ital}>Camellia sinensis</Text> is actually    'herbal' tea, aka tisane; or rooibos tea ('red' tea if you're in the    West).)    {'\n\n'} How can so many different types of tea all come from the same    tea leaf? It all has to do with how the leaves are processed. Let’s quickly review some of the more well-known types:",
    instructions: '',
  },
  Black: {
    id: 3,
    title: 'Black Tea',
    time: 4000 * 60,
    description:
      "<Text style={styles.highlight}>    Or 'Red Tea' if you are from the East!  </Text>  {'\n\n'}The tea leaf is wilted, sometimes crushed, and fully oxidized.  Black tea contains the most caffeine of all the tea types, but still  much less than your average cup of coffee. Black tea has a robust ﬂavor  and strong tannins. It often pairs well with milk and sugar, if you want  to reduce the “bite.” I typically think of black tea when it’s “tea  time” and I want something to accompany a sweet cookie or scone.",
    instructions:
      'Water temp: boiling. Pour over leaves and steep for 3-5 minutes. Some teas will get bitter easily; if the first time your tea is bitter, brew either for a shorter time period, with slightly cooler water, or both. Best for 1-2 steepings.',
  },
  Green: {
    id: 4,
    title: 'Green Tea',
    time: 3000 * 60,
    description:
      'The tea leaf is unwilted and unoxidized. It has a grassy ﬂavor, and     contains more caffeine than white tea, but less than Oolong and black    tea. Green tea is most commonly associated with Asian rituals and tea    ceremonies.',
    instructions:
      'Water temp: 175 degrees F. Pour over leaves and steep for 2-3 minutes. If bitter, use cooler water or steep for a shorter time. Green teas become bitter easily if overbrewed. Usually resteeps pretty well, 2-3 brews.',
  },
  Oolong: {
    id: 5,
    title: 'Oolong Tea',
    time: 500 * 600,
    description:
      'The tea leaf is wilted, bruised, and partially oxidized. Oolong tea has     slightly more caffeine than green tea, but not as much as black tea.    Oolong teas are full bodied in ﬂavor and aroma ranging from green and    ﬂoral to dark and roasted with many notes between.',
    instructions:
      'Water temp: 190 degrees F. Rinse by pouring over leaves and steeping for 10 seconds, then pouring out this first pot (optional, helps opens leaves up and removes possible dirt). To steep, pour over leaves and steep 30-45 seconds for a first steeping. Add 15 seconds for each following steeping. Increase water temp by 10 degrees if flavor starts to fade. Resteeps fantastically. Good oolongs can resteep so well, I have ran out of day before running out of flavor.',
  },
  Herbal: {
    id: 6,
    title: 'Herbal Tea',
    time: 5000 * 60,
    description:
      'Other herbal infusions (also lacking caffeine) are really just mixes of     dried fruits, herbs, and ﬂowers, and are sometimes blended with tea.    Common herbs, seeds, barks, and ﬂowers found in tisanes included    chamomile flower, peppermint leaf, hibiscus flower, dandelion leaf,    nettle leaf, red clover, blackberry leaf, rose hips, cardamom seed,    licorice root, sage leaf, cinnamon, lemon verbena leaf, red raspberry    leaf, ginseng leaf, and many, many others. Fruits I commonly see in    herbal infusions included orange peel, lemon peel, various dried    berries, apples, pears, pineapple, and more!',
    instructions:
      "Water temp: boiling. Pour over leaves and steep for 5+ minutes. Forget it exists, even--it's fine. Most herbal teas do not get bitter. Don't bother resteeping, not usually good for more than the first brew.",
  },
  White: {
    id: 7,
    title: 'White Tea',
    time: 2500 * 60,
    description:
      'The tea leaf is wilted and unoxidized. White tea has a faint, delicate     ﬂavor, and the least amount of caffeine.',
    instructions:
      'Water temp: 175 degrees F. Pour over leaves and steep 2-3 minutes. Resteeps well for multiple steepings.',
  },
  Other: {
    id: 8,
    title: 'Other Teas',
    time: 0,
    description:
      'There are other categories and sub-categories teas, too, such as pu-erh     tea (usually considered a type of black tea), yerba mates, Eastern    Beauty (aka "puff" or "formosa") tea, and more. But let\'s just stick to    the basics for now, because I don\'t want to spend all afternoon    copy-pasting and finding good research.',
    instructions: '',
  },
};
const SectionData = Object.values(allSections);
export default SectionData;
