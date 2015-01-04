package in.vijay;

import javax.servlet.ServletException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/message")
public class SampleServlet extends HttpServlet {
private static final long serialVersionUID = 1L;

protected void doGet(HttpServletRequest request,
        HttpServletResponse response) throws ServletException, IOException {

        
        response.setContentType("text/plain");
        response.getWriter().write("Hi!!How are you.");
}
}