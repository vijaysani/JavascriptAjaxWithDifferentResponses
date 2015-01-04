package in.co.javatutorials;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author javatutorials.co.in
 */
@WebServlet("/say-hello")    // Servlet mapped to "/say-hello"
public class HelloWorldServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// Set response header
		response.setContentType("text/html;UTF-8");

		// Set response body content. response body is returned as Ajax Response Text
		PrintWriter writer = response.getWriter();
		writer.write("Hello World!!");    // "Hello World!!" is returned as Ajax Response Text in this example

		writer.close();
	}
}
