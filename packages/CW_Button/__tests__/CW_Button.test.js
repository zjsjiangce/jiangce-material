import { shallowMount } from '@vue/test-utils';
import CW_Button from '../src/CW_Button.vue';
describe('CW_Button', () => {
    test('test CW_Button', () => {
      const wrapper = shallowMount(CW_Button);
      expect(wrapper.find('.unite-test').text())
        .toEqual('单元测试');
    });
});
