import React from 'react';
import {View, Text, Stack, useColorScheme} from 'react-native';

import {Colors, LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
import Section from './Section';
import styles from './MyStylesheet';

const Sections = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Section title="WELCOME">
        Behold, it is--you invited in--
        <Text style={styles.highlight}>TEEEEAAAAAAA</Text> Noooo, what have you
        DONE!? Nothing left to do but drink it all.
      </Section>
      <Section title="About Tea">
        <Text>
          In actuality, all tea comes from a singular plant, called{' '}
          <Text style={styles.ital}>Camellia sinensis</Text>. The various
          different types and ﬂavors of tea result from processing the{' '}
          <Text style={styles.ital}>Camellia sinensis</Text> leaf in different
          ways, or blending it with other things (such as herbs, ﬂowers, and
          fruits). (Tea without{' '}
          <Text style={styles.ital}>Camellia sinensis</Text> is actually
          'herbal' tea, aka tisane; or rooibos tea ('red' tea if you're in the
          West).)
          {'\n\n'} How can so many different types of tea all come from the same
          tea leaf? It all has to do with how the leaves are processed. Let’s
          quickly review some of the more well-known types:
        </Text>
      </Section>
      <Section title="Black Tea">
        <Text style={styles.highlight}>
          Or 'Red Tea' if you are from the East!
        </Text>
        {'\n\n'}The tea leaf is wilted, sometimes crushed, and fully oxidized.
        Black tea contains the most caffeine of all the tea types, but still
        much less than your average cup of coffee. Black tea has a robust ﬂavor
        and strong tannins. It often pairs well with milk and sugar, if you want
        to reduce the “bite.” I typically think of black tea when it’s “tea
        time” and I want something to accompany a sweet cookie or scone.
      </Section>
      <Section title="Green Tea">
        The tea leaf is unwilted and unoxidized. It has a grassy ﬂavor, and
        contains more caffeine than white tea, but less than Oolong and black
        tea. Green tea is most commonly associated with Asian rituals and tea
        ceremonies.
      </Section>
      <Section title="White Tea">
        The tea leaf is wilted and unoxidized. White tea has a faint, delicate
        ﬂavor, and the least amount of caffeine.
      </Section>
      <Section title="Oolong Tea">
        The tea leaf is wilted, bruised, and partially oxidized. Oolong tea has
        slightly more caffeine than green tea, but not as much as black tea.
        Oolong teas are full bodied in ﬂavor and aroma ranging from green and
        ﬂoral to dark and roasted with many notes between.
      </Section>
      <Section title="Herbal Tea">
        Other herbal infusions (also lacking caffeine) are really just mixes of
        dried fruits, herbs, and ﬂowers, and are sometimes blended with tea.
        Common herbs, seeds, barks, and ﬂowers found in tisanes included
        chamomile flower, peppermint leaf, hibiscus flower, dandelion leaf,
        nettle leaf, red clover, blackberry leaf, rose hips, cardamom seed,
        licorice root, sage leaf, cinnamon, lemon verbena leaf, red raspberry
        leaf, ginseng leaf, and many, many others. Fruits I commonly see in
        herbal infusions included orange peel, lemon peel, various dried
        berries, apples, pears, pineapple, and more!
      </Section>
      <Section title="Other Teas">
        There are other categories and sub-categories teas, too, such as pu-erh
        tea (usually considered a type of black tea), yerba mates, Eastern
        Beauty (aka "puff" or "formosa") tea, and more. But let's just stick to
        the basics for now, because I don't want to spend all afternoon
        copy-pasting and finding good research.
      </Section>
      <LearnMoreLinks />
    </View>
  );
};

export default Sections;
