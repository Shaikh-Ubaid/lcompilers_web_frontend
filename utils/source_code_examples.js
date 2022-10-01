var src_code_mandel_brot_python = `@ccall
def show_img(w: i32, h: i32, A: i32[h, w]):
    pass

@ccall
def show_img_color(w: i32, h: i32, A: i32[h, w, 4]):
    pass

def main0():
    Nx: i32 = 600; Ny: i32 = 450; n_max: i32 = 255

    xcenter: f64 = -0.5; ycenter: f64 = 0.0
    width: f64 = 4; height: f64 = 3
    dx_di: f64 = width/Nx; dy_dj: f64 = -height/Ny
    x_offset: f64 = xcenter - (Nx+1)*dx_di/2; y_offset: f64 = ycenter - (Ny+1)*dy_dj/2

    i: i32; j: i32; n: i32; idx: i32
    x: f64; y: f64; x_0: f64; y_0: f64; x_sqr: f64; y_sqr: f64

    image: i32[450, 600] = empty(Ny, Nx)
    image_color: i32[450, 600, 4] = empty(Ny, Nx, 4)
    palette: i32[4, 3] = empty(4, 3)

    for j in range(Ny):
        y_0 = y_offset + dy_dj * (j + 1)
        for i in range(Nx):
            x_0 = x_offset + dx_di * (i + 1)
            x = 0.0; y = 0.0; n = 0
            while(True):
                x_sqr = x ** 2.0
                y_sqr = y ** 2.0
                if (x_sqr + y_sqr > 4 or n == n_max):
                    image[j,i] = 255 - n
                    break
                y = y_0 + 2 * x * y
                x = x_0 + x_sqr - y_sqr
                n = n + 1

    palette[0,0] =   0; palette[0,1] = 135; palette[0,2] =  68
    palette[1,0] =   0; palette[1,1] =  87; palette[1,2] = 231
    palette[2,0] = 214; palette[2,1] =  45; palette[2,2] =  32
    palette[3,0] = 255; palette[3,1] = 167; palette[3,2] =   0

    for j in range(Ny):
        for i in range(Nx):
            idx = image[j,i] - int(image[j,i]/4)*4
            image_color[j,i,0] = palette[idx,0] # Red
            image_color[j,i,1] = palette[idx,1] # Green
            image_color[j,i,2] = palette[idx,2] # Blue
            image_color[j,i,3] = 255            # Alpha

    print("The Mandelbrot image in color:")
    show_img_color(Nx, Ny, image_color)
    print("The Mandelbrot image in grayscale:")
    show_img(Nx, Ny, image)
    print("Done.")

main0()
`;

var src_code_mandel_brot_fortran = `program mandelbrot
integer, parameter :: Nx = 600, Ny = 450, n_max = 255, dp=kind(0.d0)
real(dp), parameter :: xcenter = -0.5_dp, ycenter = 0.0_dp, &
    width = 4, height = 3, dx_di = width/Nx, dy_dj = -height/Ny, &
    x_offset = xcenter - (Nx+1)*dx_di/2, y_offset = ycenter - (Ny+1)*dy_dj/2
integer :: image(Nx,Ny), image_color(4,Nx,Ny), palette(3,4), i, j, n, idx
real(dp) :: x, y, x_0, y_0, x_sqr, y_sqr
interface
    subroutine show_img(w, h, A) bind(c)
    integer, intent(in) :: w, h
    integer, intent(in) :: A(w,h)
    end subroutine
    subroutine show_img_color(w, h, A) bind(c)
    integer, intent(in) :: w, h
    integer, intent(in) :: A(4,w,h)
    end subroutine
end interface
do j = 1, Ny
    y_0 = y_offset + dy_dj * j
    do i = 1, Nx
        x_0 = x_offset + dx_di * i
        x = 0; y = 0; n = 0
        do
            x_sqr = x ** 2; y_sqr = y ** 2
            if (x_sqr + y_sqr > 4 .or. n == n_max) then
                image(i,j) = 255-n
                exit
            end if
            y = y_0 + 2 * x * y
            x = x_0 + x_sqr - y_sqr
            n = n + 1
        end do
    end do
end do
palette(1,1) =   0; palette(2,1) = 135; palette(3,1) =  68
palette(1,2) =   0; palette(2,2) =  87; palette(3,2) = 231
palette(1,3) = 214; palette(2,3) =  45; palette(3,3) =  32
palette(1,4) = 255; palette(2,4) = 167; palette(3,4) =   0
do j = 1, Ny
    do i = 1, Nx
        idx = image(i,j) - (image(i,j)/4)*4 + 1
        image_color(1,i,j) = palette(1,idx) ! Red
        image_color(2,i,j) = palette(2,idx) ! Green
        image_color(3,i,j) = palette(3,idx) ! Blue
        image_color(4,i,j) = 255            ! Alpha
    end do
end do
print *, "The Mandelbrot image in color:"
call show_img_color(Nx, Ny, image_color)
print *, "The Mandelbrot image in grayscale:"
call show_img(Nx, Ny, image)
print *, "Done."
end program mandelbrot
`;

var src_code_examples = {
    lpython: {
        src_code_mandel_brot: src_code_mandel_brot_python
    },
    lfortran: {
        src_code_mandel_brot: src_code_mandel_brot_fortran
    }
};

export default src_code_examples;
