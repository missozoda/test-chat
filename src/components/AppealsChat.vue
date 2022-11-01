<template>
  <div class="h-full w-[460px]">
    <div class="header text-lg font-normal text-[#58636f] px-[30px] pt-[30px] pb-[17px]">
      <p class="name mb-[8px]">F.I.Sh <span class="text-[#031529] font-medium">Ivan Ivanov</span></p>
      <p class="tel">Tel: <span class="text-[#031529] font-medium">+998 (99) 321-44-55</span></p>
    </div>
    <div class="q-pa-md row justify-center bg-[#58636F]/10 h-full shadow-box shadow-5 w-full">
      <div class="w-[455px]">
        <q-chat-message
          name="<span class='text-[#58636F]'>17:04 11.02.2022 Mijoz</span>"
          name-html
          :text="['Lorem Ipsum is simply dummy text of the printing and typesetting industry']"
          text-color="white"
          bg-color="primary"
          size="7"
        />
        <q-chat-message
          name="<span class='text-[#58636F]'>17:04 11.02.2022 Ivan Ivanov</span>"
          name-html
          :text="['Lorem Ipsum is simply dummy text of the printing and typesetting industry']"
          text-color="dark"
          bg-color="white"
          size="7"
          sent
        />
        <q-chat-message
          name="<span class='text-[#58636F]'>17:04 11.02.2022 Mijoz</span>"
          name-html
          :text="['Lorem Ipsum is simply dummy text of the printing and typesetting industry']"
          text-color="white"
          bg-color="primary"
          size="7"
        />
        <q-chat-message
          name="<span class='text-[#58636F]'>17:04 11.02.2022 Ivan Ivanov</span>"
          name-html
          :text="['Lorem Ipsum is simply dummy text of the printing and typesetting industry']"
          text-color="dark"
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
