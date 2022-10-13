<template>
  <CodeSwitcher
    :languages="
      languages.reduce((t, v, i) => {
        t[i] = v.name;
        return t;
      }, {})
    "
  >
    <template v-for="(item, index) in languages" :slot="index">
      <div :key="index">
        <code> {{ item.file }} </code>
        <slot :name="index"></slot>
      </div>
    </template>
  </CodeSwitcher>
</template>

<script>
export default {
  name: "FunctionCodeSwitcher",
  props: {
    langnang: {
      type: Array,
      default: () => [],
    },
    lodash: {
      type: Array,
      default: () => [],
    },
    underscode: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    languages() {
      return [
        ...this.langnang.map((v) => ({
          name: `Langnang.${v}`,
          file: `@langnang/js-func/src/${v}.ts`,
        })),
        ...this.lodash.map((v) => ({
          name: `Lodash.${v}`,
          file: `lodash/${v}.js`,
        })),
        ...this.underscode.map((v) => ({
          name: `Underscode.${v}`,
          file: `underscore/modules/${v}.js`,
        })),
      ];
    },
  },
};
</script>

<style lang="scss"></style>
