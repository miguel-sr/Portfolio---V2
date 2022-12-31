import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import jwtService from "@/services/jwt.service";
import Swal from "sweetalert2";

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (to.matched.some((record) => record.meta.isAdmin)) {
    if (localStorage.getItem("userToken") == null) {
      next({
        path: "/login",
      });
    } else {
      const user = jwtService.decode();
      if (user.credentials === "admin") {
        next();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Permissões insuficientes!",
        });
        next({
          path: "/",
        });
      }
    }
  } else {
    next();
  }
};
