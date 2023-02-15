<template>
  <div class="h-full w-[460px] shadow-box shadow-5 overflow-hidden">
    <div class="header w-[430px] text-lg font-normal text-[#58636f] pl-[30px] pt-[28px] pb-[14px] bg-white">
      <p class="name p-0 m-0 mb-2">F.I.Sh <span class="text-[#031529] font-medium">Ivan Ivanov</span></p>
      <p class="tel p-0 m-0">Tel: <span class="text-[#031529] font-medium">+998 (99) 321-44-55</span></p>
    </div>
    <div class=" row justify-center bg-[#58636F]/10 h-full">
      <div class="q-pa-md w-[430px] overflow-y-auto text-[16px] leading-5">
        <q-chat-message
          name="<span class='text-[#58636F]'>17:04 11.02.2022 Mijoz</span>"
          name-html
          :text="['Lorem Ipsum is simply dummy text of the printing and typesetting industry']"
          text-color="white"
          bg-color="[#002955]"
          size="7"
        />
        <q-chat-message
          name="<span class='text-[#58636F]'>17:04 11.02.2022 Ivan Ivanov</span>"
          name-html
          :text="['Lorem Ipsum is simply dummy text of the printing and typesetting industry']"
          text-color="[#031529]"
          bg-color="white"
          opacity="0.8"
          size="7"
          sent
        />
        <q-chat-message
          name="<span class='text-[#58636F]'>17:04 11.02.2022 Mijoz</span>"
          name-html
          :text="['Lorem Ipsum is simply dummy text of the printing and typesetting industry']"
          text-color="white"
          bg-color="[#002955]"
          size="7"
        />
        <q-chat-message
          name="<span class='text-[#58636F]'>17:04 11.02.2022 Ivan Ivanov</span>"
          name-html
          :text="['Lorem Ipsum is simply dummy text of the printing and typesetting industry']"
          text-color="[#031529]"
          bg-color="white"
          size="7"
          sent
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppealsChat",
}
</script>
