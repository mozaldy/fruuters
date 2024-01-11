<template>
  <div>
    <Hero text1="Contact Us!" />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-5 mr-auto">
          <p class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti
            asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore
            expedita illum iusto, aut repellat fuga!
          </p>
          <ul class="list-unstyled pl-md-5 mb-5">
            <li class="d-flex text-black mb-2">
              <span class="mr-3"><span class="icon-map"></span></span> Jl. Lorem Ipsum No. 99,
              Banyuwangi,<br />
              Indonesia
            </li>
            <li class="d-flex text-black mb-2">
              <span class="mr-3"><span class="icon-phone"></span></span> +62 8123 4567 890
            </li>
            <li class="d-flex text-black">
              <span class="mr-3"><span class="icon-envelope-o"></span></span>
              <a
                href="/cdn-cgi/l/email-protection"
                class="__cf_email__"
                data-cfemail="422b2c242d022f3b352720312b36276c212d2f"
                >fruuters@gmail.com</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <form class="mb-5" method="post" id="contactForm" name="contactForm">
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="name" class="col-form-label">Name</label>
                <input type="text" class="form-control" name="name" id="name" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="email" class="col-form-label">Email</label>
                <input type="text" class="form-control" name="email" id="email" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="message" class="col-form-label">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input
                  type="submit"
                  value="Send Message"
                  class="mt-5 btn-fruuters rounded-5 border-0 text-white py-2 px-4"
                />
                <span class="submitting"></span>
              </div>
            </div>
          </form>
          <div id="form-message-warning mt-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'

export default {
  components: {
    Hero
  }
}
</script>
<style></style>
